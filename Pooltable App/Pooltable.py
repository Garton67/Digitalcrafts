from pooltable_class import PoolTable
from datetime import date

pool_tables = []


for i in range(1, 13):
    pool_tables.append(PoolTable(i))


def display_tables():
    print("\nCurrent Status of Pool Tables")
       
    for table in pool_tables:
  
        if table.is_occupied == False:
            status = "Not Occupied"
            print(f"Pool Table {table.number}: {status}")
        else:
            status = "Occupied"
            print(f"Pool Table {table.number}: {status} - Start Time: {table.start_time}")


print("\nWelcome To Pooltable Manager!")

while True:
    display_tables()
    print("\n* Main Menu *")
    print("1 - Check Out a Pool Table")
    print("2 - Return a Pool Table")
    #print("3 - View status of Pool Tables")
    print("q - Quit app")

    choice = input("\nSelect an option from the menu: ")

    if choice == "1":
        display_tables()
        table_number = int(input("\nEnter table number to check out: "))
        table = pool_tables[table_number - 1]
        if table.is_occupied == True:
            print("\nThis table is occupied.")
                
        else:
            table.check_out()
            print(f"\nPool Table {table_number} has been checked out.")
                       

    elif choice == "2":
        display_tables()
        table_number = int(input("\nEnter The Table Number To Check In: "))
        table = pool_tables[table_number - 1]
        if table.is_occupied == False:
            print("\nThis table has not been checked out.")
        
        else:
            table.return_table()
            print(f"Pool Table {table_number} has been returned.")
        
             
    #elif choice == "3":
        display_tables()

    elif choice == "q":
        print("\nExiting Pooltable Manager.")
        break
