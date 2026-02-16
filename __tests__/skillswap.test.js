const { matchSkillsToUser } = require('../skillswap-functions');

describe('matchSkillsToUser', () => {

  const skills = [
    { title: 'Python Tutoring', category: 'Programming', price: 20 },
    { title: 'JavaScript Help', category: 'Programming', price: 25 },
    { title: 'Guitar Lessons', category: 'Music', price: 15 },
    { title: 'Resume Review', category: 'Career', price: 0 }
  ];

  test('matches by category and price', () => {
    const result = matchSkillsToUser({ category: 'Programming', maxPrice: 30 }, skills);
    expect(result.length).toBe(2);
  });

  test('filters by max price', () => {
    const result = matchSkillsToUser({ category: 'Programming', maxPrice: 20 }, skills);
    expect(result.length).toBe(1);
  });

  test('returns empty array if no match', () => {
    const result = matchSkillsToUser({ category: 'Cooking', maxPrice: 100 }, skills);
    expect(result).toEqual([]);
  });

  test('includes free skills', () => {
    const result = matchSkillsToUser({ category: 'Career', maxPrice: 0 }, skills);
    expect(result.length).toBe(1);
  });

});
