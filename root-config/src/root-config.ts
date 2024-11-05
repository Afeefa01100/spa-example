import { registerApplication, start, LifeCycles } from 'single-spa';

registerApplication({
  name: 'app1',
  app: () => System.import<LifeCycles<any>>('app1') as Promise<LifeCycles<any>>,
  activeWhen: ['/app1'],
});

registerApplication({
  name: 'app2',
  app: () => System.import<LifeCycles<any>>('app2') as Promise<LifeCycles<any>>,
  activeWhen: ['/app2'],
});

start();
