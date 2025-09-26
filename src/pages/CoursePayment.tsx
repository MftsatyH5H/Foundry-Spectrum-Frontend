import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ArrowLeftOutlined } from '@ant-design/icons';
import { Course } from '../types/course.type';
import selectedCourseAPIs from '../api/selectedCourse.api';

interface PaymentSummary {
  courses: number;
  subtotal: number;
  discount: number;
  fees: number;
  total: number;
}

function CoursePayment() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.user);
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);
  const [showCreditCardForm, setShowCreditCardForm] = useState(false);
  const [creditCardData, setCreditCardData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    email: '',
    phone: ''
  });
  const [summary, setSummary] = useState<PaymentSummary>({
    courses: 1,
    subtotal: 0,
    discount: 0,
    fees: 2,
    total: 0
  });

  const coursesAPI = new selectedCourseAPIs();

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const response = await coursesAPI.getCourseByIdApi(id);
        setCourse(response.data);
        
        // Check if user is already enrolled
        if (response.data.accessLevel === 'ENROLLED') {
          navigate(`/course-overview/${id}`);
          return;
        }
        
        // Calculate initial summary
        const coursePrice = response.data.is_free ? 0 : response.data.price;
        const subtotal = coursePrice;
        const fees = coursePrice > 0 ? 2 : 0; // Only charge fees for paid courses
        const total = subtotal + fees;
        
        setSummary({
          courses: 1,
          subtotal,
          discount: 0,
          fees,
          total
        });
      } catch (error) {
        console.error('Error fetching course:', error);
        navigate('/courses');
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id, navigate]);

  const handlePromoCode = () => {
    // Simple promo code logic - you can enhance this
    if (promoCode.toLowerCase() === 'welcome20') {
      const discount = Math.round(summary.subtotal * 0.2);
      setAppliedDiscount(discount);
      setSummary(prev => ({
        ...prev,
        discount,
        total: prev.subtotal - discount + prev.fees
      }));
    } else if (promoCode.toLowerCase() === 'student50') {
      const discount = Math.round(summary.subtotal * 0.5);
      setAppliedDiscount(discount);
      setSummary(prev => ({
        ...prev,
        discount,
        total: prev.subtotal - discount + prev.fees
      }));
    }
  };

  const handleCreditCardPayment = () => {
    setShowCreditCardForm(true);
  };

  const handleCreditCardSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!creditCardData.cardNumber || !creditCardData.expiryDate || !creditCardData.cvv || 
        !creditCardData.cardholderName || !creditCardData.email || !creditCardData.phone) {
      alert('Please fill in all required fields');
      return;
    }

    if (!id) {
      alert('Course ID not found');
      return;
    }

    setPaymentLoading(true);
    
    try {
      // Prepare payment data
      const paymentData = {
        amount: summary.total,
        currency: 'USD',
        paymentMethod: 'credit_card',
        cardDetails: {
          number: creditCardData.cardNumber.replace(/\s/g, ''), // Remove spaces
          expiryMonth: creditCardData.expiryDate.split('/')[0],
          expiryYear: `20${creditCardData.expiryDate.split('/')[1]}`,
          cvv: creditCardData.cvv,
          cardholderName: creditCardData.cardholderName
        },
        billingInfo: {
          email: creditCardData.email,
          phone: creditCardData.phone
        },
        promoCode: promoCode || null,
        discount: appliedDiscount
      };

      // Process payment
      const response = await coursesAPI.processPayment(id, paymentData);
      
      if (response.status === 200 || response.status === 201) {
        // Payment successful - redirect to course navigation
        navigate(`/course-overview/${id}`);
      } else {
        throw new Error('Payment failed');
      }
    } catch (error: any) {
      console.error('Payment error:', error);
      alert(`Payment failed: ${error.response?.data?.message || error.message || 'Unknown error'}`);
    } finally {
      setPaymentLoading(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  const formatPrice = (price: number) => {
    return `$${price.toFixed(2)}`;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0316] to-[#1A0B2E] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0A0316] to-[#1A0B2E] flex items-center justify-center">
        <div className="text-white text-xl">Course not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0316] to-[#1A0B2E] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-foundryyellow transition-colors"
          >
            <ArrowLeftOutlined className="text-2xl" />
          </button>
          <h1 className="text-3xl font-bold text-white">Foundry</h1>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1A1A2E] rounded-2xl p-8 shadow-2xl">
            {/* Title */}
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Your Purchase about to be done</h2>
              <p className="text-[#afafc7]">Let's Start new Journey</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Course Details */}
              <div className="space-y-6">
                <div className="bg-[#2A2A3E] rounded-xl p-6">
                  <div className="flex gap-4">
                    <img
                      src={course.thumbnail_url.replace('localstack-dev', 'localhost')}
                      alt={course.title}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="text-white font-semibold text-lg mb-2">{course.title}</h3>
                      <div className="flex items-center gap-4 mb-2">
                        <span className="text-foundryyellow font-bold text-xl">
                          {course.is_free ? 'Free' : formatPrice(course.price)}
                        </span>
                        {!course.is_free && course.price < 500 && (
                          <span className="text-[#afafc7] line-through text-sm">
                            {formatPrice(course.price * 4.25)}
                          </span>
                        )}
                      </div>
                      <p className="text-[#afafc7] text-sm">
                        {course.categories.length > 0 ? course.categories[0].name : 'General'} • {course.difficulty}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Promo Code */}
                <div className="bg-[#2A2A3E] rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-4">Apply Promo Code</h4>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter promo code"
                      className="flex-1 bg-[#1A1A2E] border border-[#5F358A] rounded-lg px-4 py-2 text-white placeholder-[#afafc7] focus:border-foundryyellow focus:outline-none"
                    />
                    <button
                      onClick={handlePromoCode}
                      className="bg-foundryyellow text-black font-semibold px-6 py-2 rounded-lg hover:bg-[#b8d20a] transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>

              {/* Payment Summary */}
              <div className="space-y-6">
                <div className="bg-[#2A2A3E] rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-4">Summary</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-[#afafc7]">
                      <span>Courses:</span>
                      <span>{summary.courses}</span>
                    </div>
                    <div className="flex justify-between text-white">
                      <span>Subtotal:</span>
                      <span>{formatPrice(summary.subtotal)}</span>
                    </div>
                    {summary.discount > 0 && (
                      <div className="flex justify-between text-foundryyellow">
                        <span>Discount:</span>
                        <span>-{formatPrice(summary.discount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-[#afafc7]">
                      <span>Fees:</span>
                      <span>{formatPrice(summary.fees)}</span>
                    </div>
                    <div className="border-t border-[#5F358A] pt-3">
                      <div className="flex justify-between text-white font-bold text-lg">
                        <span>Total:</span>
                        <span>{formatPrice(summary.total)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-[#2A2A3E] rounded-xl p-6">
                  <h4 className="text-white font-semibold mb-4">Payment Method</h4>
                  <button
                    onClick={handleCreditCardPayment}
                    className="w-full bg-[#1A1A2E] border border-[#5F358A] rounded-lg p-4 text-white hover:border-foundryyellow transition-colors flex items-center justify-center gap-3"
                  >
                    <span className="text-foundryyellow text-2xl">💳</span>
                    <span className="text-lg font-semibold">Pay with Credit Card</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="max-w-4xl mx-auto mt-8 flex justify-between items-center text-[#afafc7] text-sm">
          <div>© 2024 Foundry Spectrum. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>

      {/* Credit Card Form Modal */}
      {showCreditCardForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-2 sm:p-4">
          <div className="bg-[#1A1A2E] rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 w-full max-w-2xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white">Credit Card Details</h2>
              <button
                onClick={() => setShowCreditCardForm(false)}
                className="text-[#afafc7] hover:text-white text-xl sm:text-2xl p-1"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleCreditCardSubmit} className="space-y-4 sm:space-y-6">
              {/* Card Number */}
              <div>
                <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Card Number *</label>
                <input
                  type="text"
                  value={creditCardData.cardNumber}
                  onChange={(e) => setCreditCardData(prev => ({ 
                    ...prev, 
                    cardNumber: formatCardNumber(e.target.value) 
                  }))}
                  placeholder="1234 5678 9012 3456"
                  maxLength={19}
                  className="w-full bg-[#2A2A3E] border border-[#5F358A] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-[#afafc7] focus:border-foundryyellow focus:outline-none text-sm sm:text-base"
                  required
                />
              </div>

              {/* Cardholder Name */}
              <div>
                <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Cardholder Name *</label>
                <input
                  type="text"
                  value={creditCardData.cardholderName}
                  onChange={(e) => setCreditCardData(prev => ({ 
                    ...prev, 
                    cardholderName: e.target.value 
                  }))}
                  placeholder="John Doe"
                  className="w-full bg-[#2A2A3E] border border-[#5F358A] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-[#afafc7] focus:border-foundryyellow focus:outline-none text-sm sm:text-base"
                  required
                />
              </div>

              {/* Expiry Date and CVV */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Expiry Date *</label>
                  <input
                    type="text"
                    value={creditCardData.expiryDate}
                    onChange={(e) => setCreditCardData(prev => ({ 
                      ...prev, 
                      expiryDate: formatExpiryDate(e.target.value) 
                    }))}
                    placeholder="MM/YY"
                    maxLength={5}
                    className="w-full bg-[#2A2A3E] border border-[#5F358A] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-[#afafc7] focus:border-foundryyellow focus:outline-none text-sm sm:text-base"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white font-semibold mb-2 text-sm sm:text-base">CVV *</label>
                  <input
                    type="text"
                    value={creditCardData.cvv}
                    onChange={(e) => setCreditCardData(prev => ({ 
                      ...prev, 
                      cvv: e.target.value.replace(/\D/g, '') 
                    }))}
                    placeholder="123"
                    maxLength={4}
                    className="w-full bg-[#2A2A3E] border border-[#5F358A] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-[#afafc7] focus:border-foundryyellow focus:outline-none text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Email Address *</label>
                <input
                  type="email"
                  value={creditCardData.email}
                  onChange={(e) => setCreditCardData(prev => ({ 
                    ...prev, 
                    email: e.target.value 
                  }))}
                  placeholder="john@example.com"
                  className="w-full bg-[#2A2A3E] border border-[#5F358A] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-[#afafc7] focus:border-foundryyellow focus:outline-none text-sm sm:text-base"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-white font-semibold mb-2 text-sm sm:text-base">Phone Number *</label>
                <input
                  type="tel"
                  value={creditCardData.phone}
                  onChange={(e) => setCreditCardData(prev => ({ 
                    ...prev, 
                    phone: e.target.value 
                  }))}
                  placeholder="+1 (555) 123-4567"
                  className="w-full bg-[#2A2A3E] border border-[#5F358A] rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 text-white placeholder-[#afafc7] focus:border-foundryyellow focus:outline-none text-sm sm:text-base"
                  required
                />
              </div>

              {/* Payment Summary */}
              <div className="bg-[#2A2A3E] rounded-lg p-3 sm:p-4">
                <h3 className="text-white font-semibold mb-3 text-sm sm:text-base">Payment Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-[#afafc7] text-xs sm:text-sm">
                    <span>Course:</span>
                    <span className="text-right max-w-[60%] truncate">{course?.title}</span>
                  </div>
                  <div className="flex justify-between text-white text-sm sm:text-base">
                    <span>Amount:</span>
                    <span className="font-bold">{formatPrice(summary.total)}</span>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  type="button"
                  onClick={() => setShowCreditCardForm(false)}
                  className="flex-1 bg-[#2A2A3E] border border-[#5F358A] text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:border-foundryyellow transition-colors text-sm sm:text-base"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={paymentLoading}
                  className="flex-1 bg-foundryyellow text-black font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-[#b8d20a] transition-colors text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {paymentLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-black"></div>
                      Processing...
                    </>
                  ) : (
                    `Pay ${formatPrice(summary.total)}`
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoursePayment;
