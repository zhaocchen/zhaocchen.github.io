module.exports = {
  docs: [
    'introduction',
    {
      type: 'category',
      label: '设计模式(TypeScript版)',
      collapsed: true,
      items: [
        'design-pattern/design-principle',
        // 创建型模式creational
        'design-pattern/factory-method',
        'design-pattern/abstract-factory',
        'design-pattern/singleton',
        'design-pattern/builder',
        'design-pattern/prototype',
        // 结构型模式structural
        'design-pattern/adapter',
        'design-pattern/bridge',
        // 'design-pattern/filter', // 额外
        'design-pattern/composite',
        'design-pattern/decorator',
        'design-pattern/facade',
        'design-pattern/flyweight',
        'design-pattern/proxy',
        // 行为模式behavioral
        'design-pattern/chain-of-responsibility',
        'design-pattern/command',
        // 'design-pattern/interpreter', // 额外
        'design-pattern/iterator',
        'design-pattern/mediator',
        'design-pattern/memento',
        'design-pattern/observer',
        'design-pattern/state',
        'design-pattern/strategy',
        'design-pattern/template',
        'design-pattern/visitor',
      ]
    },
    {
      type: 'category',
      label: '剑指Offer(JavaScript版)',
      collapsed: true,
      items: [
        'lcof/data-structures1',
        'lcof/data-structures2',
        'lcof/huawei',
        'lcof/rest'
      ]
    },
    {
      type: 'category',
      label: '白板系列',
      collapsed: true,
      items: [
        'whiteboard/string-trim',
        'whiteboard/new',
        'whiteboard/array-flat',
        'whiteboard/array-map',
        'whiteboard/array-reduce',
        'whiteboard/promise-allSettled',
        'whiteboard/promise-all',
        'whiteboard/promisify',
        'whiteboard/setInterval',
        'whiteboard/json',
        'whiteboard/throttle-debounce',
        'whiteboard/event-emitter',
        'whiteboard/sleep',
        'whiteboard/array-get',
        'whiteboard/bisect_right',
        
      ]
    },
    {
      type: 'category',
      label: '业务实现',
      collapsed: true,
      items: [
        'feature/drag',
      ]
    },
    // {
    //   type: 'category',
    //   label: '可视化',
    //   collapsed: true,
    //   items: [
    //     'vision/introduction',
    //     'vision/pie',
    //   ]
    // },
    {
      type: 'category',
      label: 'Docusaurus Tutorial',
      collapsed: true,
      items: [
          'getting-started',
          'create-a-page',
          'create-a-document',
          'create-a-blog-post',
          'markdown-features',
          'thank-you',
      ]
    }
  ]
};
