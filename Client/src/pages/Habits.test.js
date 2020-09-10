import Habits from './Habits.js';

describe('Habits', () => {
    let component
    beforeEach(() => {
        component = shallow(<Habits />);
    })

    test('testing if h1 says Habits', () =>{
        expect(component.find('h1').text()).toEqual('Habits')
    })

    test('testing if h3 says Habitory', () =>{
        expect(component.find('h3').text()).toEqual('Habitory')
    })

})