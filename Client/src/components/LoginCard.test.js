import LoginCard from './LoginCard'

describe('LoginCard',()=>{
    let component, userInput, fakeEvent;

    beforeEach(()=>{

        component = shallow(<LoginCard.WrappedComponent/>)

    })

    test("input form exists", () => {
        expect(component.find('.login-form')).toHaveLength(1);
    })

    test("user input", ()=>{
        userInput = component.find("#email")
        userInput.simulate("change", {target: {value: "hello"}});
        expect(component.state("userInput")).toBe("hello")
    })

    test('it has a state', () => {
        const instance = component.instance()
        expect(instance['state']).toEqual({"email": '', "password": ''})
    })

    test("state changes with input", () => {
        const handleChange = jest.spyOn(component.instance(), 'handleChange')
        expect(typeof handleChange).toBe( 'function' );
    })

    test("state changes with input", () => {
        const handleSubmit = jest.spyOn(component.instance(), 'handleSubmit')
        expect(typeof handleSubmit).toBe( 'function' );
    })

    test("prevents default on click", ()=>{
        const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        component.find(".login-form").simulate("submit", fakeEvent);
        expect(component.find(Notification).length).toBe(1)
    })


})