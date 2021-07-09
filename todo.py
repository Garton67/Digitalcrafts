tasks = []


def add_task(user_input, tasks):
    task = input("Enter the task: ")
    priority = input("Enter the priority (high/medium/low): ")

    todo = {"task": task, "Priority": priority}
    tasks.append(todo)

    return tasks

def view_task(user_input, tasks):
    if len(tasks) == 0:
        print("You have no tasks.")
    for i in range(len(tasks)):
        print(f"{i + 1} - {tasks[i]['task']} - {tasks[i]['Priority']}")


while True:
    user_input = input(
        "Press 1 to add task, 2 to view all task, q to quit: ")

    if user_input == '1':
        add_task(user_input, tasks)

    elif user_input == '2':
        view_task(user_input, tasks)

    elif user_input == 'q':
        print("Goodbye.")
        break

    else:
        print("Try again.")

