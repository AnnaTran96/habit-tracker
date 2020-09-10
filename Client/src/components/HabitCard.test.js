import HabitCard from './HabitCard'

describe('HabitCard', () => {
    let component;

    beforeEach(() => {
       component = shallow(<HabitCard/>);

    });

    test("it renders", () => {
        expect(component.find('.habit-container')).toHaveLength(1);
    });

})