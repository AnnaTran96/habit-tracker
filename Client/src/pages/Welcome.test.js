import Welcome from './Welcome.js';

describe('Welcome', () => {
    let component
    beforeEach(() => {
        component = shallow(<Welcome />);
    })

    test("it renders", () => {
        expect(component.find('#background')).toHaveLength(1);
    });

    test('testing if h1 says Habitory', () =>{
        expect(component.find('h1').text()).toEqual('Habitory')
    })
})