import Button from './Button'

describe('Button', () => {
    let component;
    let preventDefault = { preventDefault: () => 'fake' }

    beforeEach(() => {
       // some pre-test setup
       component = shallow(<Button/>);

    });

    test("there is one button", () => {
        // how we test it
        expect(component.find('button')).toHaveLength(1);
    });

    test('it should disable the button', () => {
        let btn = component.find('button')
        btn.simulate('click', fakeEvent)
        expect(btn.props('disabled')).toBe('true');
    })

    // test('it fetches API', () => {
    //     function test(data) {
    //         try {
    //             expect(data).toBe('data')
    //         } catch (err) {
    //             console.warn(err.message)
    //         }
    //     }
    //  })

})