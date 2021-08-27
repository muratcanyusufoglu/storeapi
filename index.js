import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';

import Route from './src/Route';

// registerRootComponent calls RouteRegistry.registerComponent('main', () => Route);
// It also ensures that whether you load the Route in Expo Go or in a native build,
// the environment is set up Routeropriately
registerRootComponent(Route);
