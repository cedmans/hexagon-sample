import { container } from '../ioc/inversify.config';

export default class InversifyContainer implements ContainerContract {
    make(interfaceClass) {
        return container.get(interfaceClass);
    }
}