import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';

const AppViewModel = DefineMap.extend({
  message: {
    value: 'Hello Project X!',
    serialize: false
  },
  title: {
    value: 'place-my-order',
    serialize: false
  }
});

export default AppViewModel;
