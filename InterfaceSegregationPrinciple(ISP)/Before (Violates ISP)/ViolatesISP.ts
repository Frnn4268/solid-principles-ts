/**
 * Interface representing user actions.
 */
interface UserInterface {
    /**
     * Logs the user into the system.
     */
    login(): void;
  
    /**
     * Logs the user out of the system.
     */
    logout(): void;
  
    /**
     * Changes the user's password.
     */
    changePassword(): void;
  
    /**
     * Creates a new post.
     */
    createPost(): void;
  
    /**
     * Deletes an existing post.
     */
    deletePost(): void;
  }