import React from 'react';

import CourseGoalItem from '../CourseGoalItem/CourseGoalItem';
import './CourseGoalList.css';

const CourseGoalList = (props: any) => {
    const { items } = props;
    return (
        <ul className="goal-list">
            {items.map((goal: any) => (
                <CourseGoalItem
                    key={goal.id}
                    id={goal.id}
                    onDelete={props.onDeleteItem}
                >
                    <span>
                        <input type="checkbox" checked={goal.complete} readOnly />
                        {goal.text}
                    </span>
                </CourseGoalItem>
            ))}
        </ul>
    );
};

export default CourseGoalList;
