todolist = []


def add_task(user_input, todolist):
    task = input("Enter the task: ")
    priority = input("Enter the priority (high/medium/low): ")

    todo = {"task": task, "Priority": priority}
    todolist.append(todo)

    return todolist

def view_task(user_input, todolist):
    if len(todolist) == 0:
        print("You have no tasks.")
    for i in range(len(todolist)):
        print(f"{i + 1} - {todolist[i]['task']} - {todolist[i]['Priority']}")


while True:
    user_input = input(
        "Press 1 to add task, 2 to view all task, q to quit: ")

    if user_input == '1':
        add_task(user_input, todolist)

    elif user_input == '2':
        view_task(user_input, todolist)

    elif user_input == 'q':
        print("Goodbye.")
        break

    else:
        print("Try again.")