const IMG = 'https://content.aiwellora.com/health/images'

export const lifestyleCategories = [
  { id: 90, name: 'Acts of Service', image: `${IMG}/acts_of_service.jpg` },
  { id: 13, name: 'Boundaries', image: `${IMG}/lifestyle_boundaries.jpg` },
  { id: 25, name: 'Focus', image: `${IMG}/magnify.jpg` },
  { id: 86, name: 'Gifting', image: `${IMG}/gifting.jpg` },
  { id: 84, name: 'Gratitude', image: `${IMG}/gratitude.jpg` },
  { id: 92, name: 'Identity', image: `${IMG}/identity.jpg` },
  { id: 94, name: 'Life Transitions', image: `${IMG}/life_transitions.jpg` },
  { id: 29, name: 'Mindfulness', image: `${IMG}/mindfulness.jpg` },
  { id: 5, name: 'Positive Thinking', image: `${IMG}/positive_thinking.jpg` },
  { id: 15, name: 'Routine', image: `${IMG}/lifestyle_morning_routine.jpg` },
  { id: 28, name: 'Salt', image: `${IMG}/salt.jpg` },
  { id: 26, name: 'Sugar', image: `${IMG}/sugar.jpg` },
  { id: 88, name: 'Time Management', image: `${IMG}/time_management.jpg` },
  { id: 82, name: 'Volunteering', image: `${IMG}/volunteering.jpg` },
  { id: 27, name: 'Water', image: `${IMG}/water.jpg` },
]

export const healthCategories = [
  { id: 108, name: 'Alcohol', image: `${IMG}/alcoholism.jpg` },
  { id: 35, name: 'Anger', image: `${IMG}/angry.jpg` },
  { id: 21, name: 'Burnout', image: `${IMG}/health_burnout.jpg` },
  { id: 33, name: 'Community', image: `${IMG}/community.jpg` },
  { id: 3, name: 'Depression', image: `${IMG}/depression.jpg` },
  { id: 106, name: 'Divorce', image: `${IMG}/divorce.jpg` },
  { id: 39, name: 'Fatigue', image: `${IMG}/fatigue.jpg` },
  { id: 2, name: 'Grief', image: `${IMG}/grief.jpg` },
  { id: 31, name: 'Insomnia', image: `${IMG}/insomnia.jpg` },
  { id: 23, name: 'Loneliness', image: `${IMG}/health_loneliness.jpg` },
  { id: 36, name: 'Nutrition', image: `${IMG}/nutrition.jpg` },
  { id: 34, name: 'OCD', image: `${IMG}/ocd.jpg` },
  { id: 37, name: 'Overeating', image: `${IMG}/overeating.jpg` },
  { id: 32, name: 'Panic Attacks', image: `${IMG}/panic_attacks.jpg` },
  { id: 100, name: 'Paranoia', image: `${IMG}/paranoia.jpg` },
  { id: 38, name: 'Peer Pressure', image: `${IMG}/peer_pressure.jpg` },
  { id: 42, name: 'Pets', image: `${IMG}/pet_therapy.jpg` },
  { id: 104, name: 'Secrets', image: `${IMG}/secrets.jpg` },
  { id: 102, name: 'Social Anxiety', image: `${IMG}/social_anxiety.jpg` },
  { id: 30, name: 'Social Media', image: `${IMG}/social_media.jpg` },
  { id: 40, name: 'Sports', image: `${IMG}/sports.jpg` },
  { id: 1, name: 'Stress', image: `${IMG}/stress.jpg` },
  { id: 98, name: 'Strife', image: `${IMG}/strife.jpg` },
  { id: 96, name: 'Unforgiveness', image: `${IMG}/unforgiveness.jpg` },
  { id: 4, name: 'Walking', image: `${IMG}/walking.jpg` },
]

export const relaxationCategories = [
  { id: 71, name: 'Art Therapy', image: `${IMG}/art_therapy.jpg` },
  { id: 45, name: 'Baking', image: `${IMG}/baking.jpg` },
  { id: 41, name: 'Baths', image: `${IMG}/warm_bath.jpg` },
  { id: 19, name: 'Breaks', image: `${IMG}/relaxation_taking_breaks.jpg` },
  { id: 44, name: 'Cooking', image: `${IMG}/cooking.jpg` },
  { id: 48, name: 'Digital Detox', image: `${IMG}/digital_detox.jpg` },
  { id: 49, name: 'Dining', image: `${IMG}/dining.jpg` },
  { id: 47, name: 'Gardening', image: `${IMG}/gardening.jpg` },
  { id: 76, name: 'Herbal Teas', image: `${IMG}/herbal_tea.jpg` },
  { id: 17, name: 'Massages', image: `${IMG}/relaxation_massage_therapy.jpg` },
  { id: 6, name: 'Nature Walks', image: `${IMG}/nature_walks.jpg` },
  { id: 80, name: 'Photography', image: `${IMG}/photography.jpg` },
  { id: 43, name: 'Sounds', image: `${IMG}/calming_sounds.jpg` },
  { id: 46, name: 'Television', image: `${IMG}/television.jpg` },
]

/** @deprecated use lifestyleCategories */
export const categories = lifestyleCategories

export const allGuides = [
  ...lifestyleCategories.map((c) => ({ ...c, sectionPath: '/lifestyle' })),
  ...healthCategories.map((c) => ({ ...c, sectionPath: '/health' })),
  ...relaxationCategories.map((c) => ({ ...c, sectionPath: '/relaxation' })),
]

export function findGuideById(id) {
  const num = Number(id)
  return allGuides.find((g) => g.id === num) || null
}

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Health', to: '/health' },
  { label: 'Relaxation', to: '/relaxation' },
  { label: 'Lifestyle', to: '/lifestyle' },
  { label: 'Logout', href: '#' },
]
