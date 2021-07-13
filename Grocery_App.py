shopping_lists = [] #global array

class Shoppinglist:
     def __init__(self, store, address):
        self.store = store
        self.address  = address
        self.items = []

     def add_item(self, item):
        self.items.append(item)


class Groceryitem:
     def __init__(self, title, price, quantity):
        self.title = title
        self.price = price
        self.quantity = quantity

while True:
    print("-----------Grocery Shopping List-----------")
    print("1 - Add Store")
    print("2 - Add item")
    print("3 - View all lists")
    print("q to quit")

    choice = input("Enter Choice:")

    if choice == "1":
        store_name = input("Add a store:")
        store_address = input("Add address:")
        store = Shoppinglist(store_name, store_address)
        shopping_lists.append(store)

    elif choice == "2":
        for index in range(0, len(shopping_lists)):
            print(f"{index + 1}--{shopping_lists[index].store}")
        
            
        store_location = int(input("Which store?:"))
        item_name = input("add item:")
        item_quantity = int(input("How many?"))
        item_price = float(input("Enter the item price:"))
        item = Groceryitem(item_name, item_quantity, item_price)
        shopping_list = shopping_lists[store_location -1]
        shopping_list.items.append(item)
        
     

    elif choice == "3":
        for store in shopping_lists:
            print(f"{store.store} - {store.address}")
            for index in range(0, len(store.items)):
                title = store.items[index].title
                print(title)
            

    elif choice =="q":
        break