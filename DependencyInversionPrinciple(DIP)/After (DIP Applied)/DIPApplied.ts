/**
 * Interface for data storage operations.
 */
interface DataStore {
    /**
     * Sets an item in the storage.
     * @param key - The key under which the item is stored.
     * @param value - The value to be stored.
     */
    setItem(key: string, value: string): void;
  }
  
  /**
   * Class implementing local storage operations.
   */
  class LocalStorage implements DataStore {
    setItem(key: string, value: string): void {
      console.log(`Saving item to local storage: ${key} = ${value}`);
      // Actual local storage logic would go here
    }
  }
  
  /**
   * Class representing a user.
   */
  class User {
    constructor(public name: string, public age: number) {}
  }
  
  /**
   * Service class for user-related operations.
   * Depends on the DataStore interface to adhere to the Dependency Inversion Principle.
   */
  class UserService {
    constructor(private dataStore: DataStore) {}
  
    /**
     * Saves a user to the storage.
     * @param user - The user object to be saved.
     */
    saveUser(user: User): void {
      this.dataStore.setItem("user", JSON.stringify(user));
    }
  }
  
  // Example usage:
  const localStorage = new LocalStorage();
  const userService = new UserService(localStorage);
  const user = new User("John Doe", 30);
  userService.saveUser(user); // Output: Saving item to local storage: user = {"name":"John Doe","age":30}