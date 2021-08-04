import React, { useState } from 'react';

import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: 'Do all exercises!', complete: false, id: 'g1' },
    { text: 'Send email to instructor!', complete: true, id: 'g3' },
    { text: 'Finish the course!', complete: false, id: 'g2' }
  ]);
  const [showCompleted, setShowCompleted] = useState(false);

  const addGoalHandler = (enteredText: string, complete: boolean) => {
    setCourseGoals(prevGoals => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, complete: complete, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const completeItemHandler = (goalId: string) => {

    setCourseGoals(prevGoals => {
      const idx = prevGoals.findIndex(i => i.id == goalId);
      if (idx > 0) {
        courseGoals[idx].complete = true;
      }

      if (showCompleted) {
        return courseGoals;
      }

      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={completeItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

export default App;
