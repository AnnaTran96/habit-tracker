import AddNewCard from './AddNewCard'

describe('AddNewCard', () => {
    let component, form, nameInput, input;

    beforeEach(() => {
       // some pre-test setup
       component = shallow(<AddNewCard.WrappedComponent/>);
       form = component.find('form');
       input = component.find('input')

    });

    test("the form renders", () => {
        // how we test it
        expect(component.find('form')).toHaveLength(1);
    });

    test("there are 2 input fields", () => {
        // how we test it
        expect(component.find('input')).toHaveLength(2)
    });

    test('it should have 1 drop down menu', () => {
        expect(component.find('select')).toHaveLength(1)
    })

    test("state changes with input", () => {
        const handleChange = jest.spyOn(component.instance(), 'handleChange')
        expect(typeof handleChange).toBe( 'function' );
    })

    test("state changes with input", () => {
        const handleSubmit = jest.spyOn(component.instance(), 'handleSubmit')
        expect(typeof handleSubmit).toBe( 'function' );
    })
})