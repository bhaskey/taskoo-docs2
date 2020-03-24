module.exports = {
  someSidebar: {
    API: ["api/post-task", "api/browse-tasks", "api/task-details", "api/offer", "api/question"],
    Specifications: [
      'spec/web/post-task-spec',
      'spec/web/filters-flow',
      'spec/web/task-details-spec',
      {
        type: 'category',
        label: 'Mobile',
        items: [
          'spec/mobile/first-time',
          'spec/mobile/post-task',
          'spec/mobile/browse-tasks',
          'spec/mobile/offer',
        ]
      }
    ],
  },
};
