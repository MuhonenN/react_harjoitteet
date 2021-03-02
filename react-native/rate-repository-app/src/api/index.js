import Router from 'koa-router';
import { Route } from 'react-router-native';

import repositories from './repositories';

const router = new Route();

router.use('/repositories', repositories.routes());

export default router;