import { AcceptTask } from "./AcceptTask"
import CompleteTask from "./CompleteTask"
import { FailedTask } from "./FailedTask"
import NewTask from "./NewTask"

export const TaskList = ({ data }) => {
    console.log(data)
    return (
        <>
            <div id="taskList" className="h-[55%] w-full overflow-x-auto  py-5 flex items-center justify-start gap-5  mt-10 flex-nowrap">
                {
                    data.tasks.map((task, idx) => {

                        if (task.active) {
                            return <AcceptTask key={idx} data={task} />
                        }
                        if (task.newTask) {
                            return <NewTask key={idx} data={task} />
                        }

                        if (task.completed) {
                            return <CompleteTask key={idx} data={task} />
                        }
                        if (task.failed) {
                            return <FailedTask key={idx} data={task} />
                        }
                    })
                }


            </div>
        </>
    )
}