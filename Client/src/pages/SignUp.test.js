import SignUp from './SignUp.js';

describe('SignUp', () => {
    let component
    beforeEach(() => {
        component = shallow(<SignUp />);
    })

    test('testing if h1 says Register', () =>{
        expect(component.find('h1').text()).toEqual('Register')
    })

    test('testing if h3 says Habitory', () =>{
        expect(component.find('h3').text()).toEqual('Habitory')
    })

    test('testing if p says Already registered?', () =>{
        expect(component.find('p').text()).toEqual('Already registered?')
    })
})