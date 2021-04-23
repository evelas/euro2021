import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// eslint-disable-next-line
const globalAny:any = global
// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

// Fail tests on any warning
console.error = (message: string) => {
    throw new Error(message);
};
