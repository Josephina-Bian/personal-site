// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 1,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 1,
    category: ['Web Development'],
  },
  {
    title: 'SQLite/MySQL',
    competency: 5,
    category: ['Languages', 'Data Analysis'],
  },
  {
    title: 'BeautifulSoup',
    competency: 5,
    category: ['Python'],
  },
  {
    title: 'Seaborn',
    competency: 5,
    category: ['Python', 'Data Visualization'],
  },
  {
    title: 'Power BI',
    competency: 5,
    category: ['Data Visualization'],
  },
  {
    title: 'NumPy',
    competency: 5,
    category: ['Python', 'Data Analysis'],
  },
  {
    title: 'SciPy',
    competency: 5,
    category: ['Python', 'Data Analysis'],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Python'],
  },
  {
    title: 'HTML',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Data Analysis'],
  },
  {
    title: 'R',
    competency: 4,
    category: ['Languages', 'Data Analysis'],
  },
  {
    title: 'Tableau',
    competency: 3,
    category: ['Data Visualization'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Python', 'Data Analysis'],
  },
  {
    title: 'Matplotlib',
    competency: 4,
    category: ['Data Visualization', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Python'],
  },
  {
    title: 'Google Analytics',
    competency: 5,
    category: ['Data Analysis'],
  },
  {
    title: 'SPSS',
    competency: 5,
    category: ['Data Analysis'],
  },
  {
    title: 'NVivo',
    competency: 3,
    category: ['Data Analysis'],
  },
  {
    title: 'Photoshop',
    competency: 3,
    category: ['Adobe Creative Suite'],
  },
  {
    title: 'Premiere Pro',
    competency: 3,
    category: ['Adobe Creative Suite'],
  },
  {
    title: 'InDesign',
    competency: 3,
    category: ['Adobe Creative Suite'],
  },
  {
    title: 'Excel',
    competency: 5,
    category: ['Microsoft Office Suite'],
  },
  {
    title: 'Word',
    competency: 5,
    category: ['Microsoft Office Suite'],
  },
  {
    title: 'PowerPoint',
    competency: 4,
    category: ['Microsoft Office Suite'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
