export default function handler(req, res) {
  const { id } = req.query;
  // mocked response
  res.status(200).json({
    form: {
      id,
      color: '#FFB2B2',
      name: 'Dummy Name',
      questions: [
        {
          id: 1,
          title: 'Dummy question title 1?',
          answer: 'Dummy question answer 1',
        },
        {
          id: 2,
          title: 'Dummy question title 2?',
          answer: 'Dummy question answer 2',
        },
        {
          id: 3,
          title: 'Dummy question title 3?',
          answer: 'Dummy question answer 3',
        },
        {
          id: 4,
          title: 'Dummy question title 4?',
          answer: 'Dummy question answer 4',
        },
        {
          id: 5,
          title: 'Dummy question title 5?',
          answer: 'Dummy question answer 5',
        },
        {
          id: 6,
          title: 'Dummy question title 6?',
          answer: 'Dummy question answer 6',
        },
      ],
    },
  });
}
