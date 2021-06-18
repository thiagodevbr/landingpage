export type LogoProps = {
  alternativeText: string
  url: string
}

export type ButtonProps = {
  label: string
  url: string
}

export type Header = {
  title: string
  description: string
  button: ButtonProps
  img: LogoProps
}

export type AboutProject = {
  title: string
  description: string
  media: LogoProps
}

export type TechSection = {
  title: string
  techIcons: [
    {
      icon: LogoProps
      title: string
    }
  ]
}

export type SectionConceptsProps = {
  title: string
  conceptsItems: [
    {
      text: string
    }
  ]
}

type SectionModulesContent = {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string
  modules: [SectionModulesContent]
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type PricingBoxProps = {
  totalPrice: number
  numberInstallments: number
  priceInstallment: number
  benefits: string
  button: ButtonProps
}

export type IconProps = {
  title: string
  url: string
}

export type AuthorProps = {
  photo: LogoProps
  name: string
  role: string
  description: string
  socialLinks: [IconProps]
}

export type SectionAboutUsProps = {
  title: string
  authors: [AuthorProps]
}

export type ReviewsProps = {
  name: string
  review: string
  photo: LogoProps
}

export type SectionReviewsProps = {
  title: string
  reviews: [ReviewsProps]
}

export type SectionFaqProps = {
  title: string
  questions: [
    {
      question: string
      answer: string
    }
  ]
}

export type LandingPageProps = {
  logo: LogoProps
  header: Header
  sectionAboutProject: AboutProject
  techSection: TechSection
  sectionConcepts: SectionConceptsProps
  sectionModules: SectionModulesProps
  sectionAgenda: SectionAgendaProps
  pricingBox: PricingBoxProps
  sectionAboutUs: SectionAboutUsProps
  sectionReviews: SectionReviewsProps
  sectionFaq: SectionFaqProps
}
