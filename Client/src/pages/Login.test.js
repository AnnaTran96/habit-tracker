import Login from './Login.js';

describe('Login', () => {
    let component
    beforeEach(() => {
        component = shallow(<Login />);
    })

    test('testing if h1 says Login', () =>{
        expect(component.find('h1').text()).toEqual('Login')
    })

    test('testing if h3 says Habitory', () =>{
        expect(component.find('h3').text()).toEqual('Habitory')
    })

    test("testing if p says Don't have an account?", () =>{
        expect(component.find('p').text()).toEqual("Don't have an account?")
    })
})