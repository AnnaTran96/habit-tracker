import ReverseButton from './ReverseButton'

describe('Reverse Button', () => {
    let component;

    beforeEach(() => {
       component = shallow(<ReverseButton/>);

    });

    test("it renders", () => {
        expect(component.find('button')).toHaveLength(1);
    });

    
})