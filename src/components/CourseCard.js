export const CourseCard = (props) => {
  // TODO: design HTML component that displays a course as a "card" on the webpage.
  return (<>
    <div class="CourseCard">
      <tr id="CC">
        <td>
          <div class="tag">
            <p>วิชา : {props.subj}</p>
            <p>เกรด : {props.grade}</p>
            <p>หน่วยกิต : {props.credit}</p>
          </div>
        </td>
        <td>
          <button class="btn" onClick = {() =>{
              props.del(props.subj)
          }}>x</button>
        </td>
      </tr>
    </div>
  </>);
};  