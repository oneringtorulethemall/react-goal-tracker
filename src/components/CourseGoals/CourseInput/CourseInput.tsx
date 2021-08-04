import React, { FormEvent, useState } from 'react';

import ErrorModal from '../../UI/ErrorModal/ErrorModal';
import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.css';

const CourseInput = (props: any) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [completed, setCompleted] = useState('false');
  const [isValid, setIsValid] = useState(true);
  const [error, setError] = useState({ title: '', message: '' });

  const goalInputChangeHandler = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0)
      setIsValid(true);
  };

  const goalCheckedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    debugger;
    setCompleted(event.target.checked ? 'true' : 'false');

  }

  const formSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid goal name'
      });
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue, completed);
    setValidFormState();
  };

  const setValidFormState = () => {
    setError({ title: '', message: '' }); // clear out the error.
    setEnteredValue('');
  }


  const onErrorConfirmHandler = (event: any) => {
    setError({ title: '', message: '' });
  };


  // let formStyle = styles["form-control"];
  let formStyle = `${styles.formControl} ${isValid ? '' : styles.invalid}`;


  return (
    <>
      {error && error.message !== '' &&
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={onErrorConfirmHandler}

        >
          <div style={{ padding: '1rem' }}>
            <p>Error: AR0292<br />
              Unable to comply. This method has not been implemented.
            </p>
          </div>
        </ErrorModal>
      }

      <form onSubmit={formSubmitHandler}>
        <div className={formStyle}>
          <label>Course Goal</label>
          <input type="text" value={enteredValue} onChange={goalInputChangeHandler} />
          <div style={{ marginTop: 10 }}>
            <label htmlFor="cbxComplete">Completed?</label>
            <input id="cbxComplete" type="checkbox" value={completed} onChange={goalCheckedHandler} />
          </div>
        </div>
        <Button type="submit">Add Goal</Button>
      </form>
    </>
  );
};

export default CourseInput;
