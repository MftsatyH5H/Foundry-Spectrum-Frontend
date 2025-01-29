interface Testimonial {
    name: string,
    comment: string,
    course: string,
    date: string,
    profilePicture: string
}
interface TestimonialList {
    testimonials: Testimonial[]
}
export type { Testimonial, TestimonialList };