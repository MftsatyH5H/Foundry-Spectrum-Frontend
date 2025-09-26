import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { userType } from '../static/userType.enum';

export const useAuth = () => {
  const user = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const isAuthenticated = user.type === userType.student || user.type === userType.instructor;
  const isVisitor = user.type === userType.visitor;

  const handleBuyNow = (courseId: string) => {
    if (isAuthenticated) {
      navigate(`/course-payment/${courseId}`);
    } else {
      setShowLoginPopup(true);
    }
  };

  const closeLoginPopup = () => {
    setShowLoginPopup(false);
  };

  return {
    isAuthenticated,
    isVisitor,
    showLoginPopup,
    handleBuyNow,
    closeLoginPopup
  };
};
