module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
      'scope-case': [2, 'always', 'lower-case'],
      'scope-empty': [2, 'never'],
      'scope-enum': [
        2,
        'always',
        [
          'global',
          'home',
          'energy',
          'characters'
        ]
      ],
      'subject-empty': [2, 'never'],
      'type-case': [2, 'always', 'lower-case'],
		  'type-empty': [2, 'never'],
      'type-enum': [
        2,
        'always',
        [
          'fix',
          'feat',
          'style',
          'refactor'
        ]
      ]
  }
};
