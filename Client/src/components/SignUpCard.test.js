import SignUpCard from './SignUpCard'

// anatomy of a test suite

describe('SignUpCard', () => {
    let component, form, nameInput, input;

    beforeEach(() => {
       // some pre-test setup
       component = shallow(<SignUpCard/>);
       form = component.find('form');
       input = component.find('input')
    //    input = component.find('input')

    });

    test("the form renders", () => {
        // how we test it
        expect(component.find('form')).toHaveLength(1);
    });

    test("there are 4 input fields", () => {
        // how we test it
        expect(component.find('input')).toHaveLength(4);
    });

    test("input form exists", () => {
        expect(component.find('.register-form')).toHaveLength(1);
    })

    test('it updates state on user input', () => {
        form = component.find('form');
        const input = form.find('input').first();
        const initState = component.state('email');
        input.simulate('change', { target: { value: 'hello' } })
        const newState = component.state('email');
        expect(newState).toEqual(initState);
    });
})