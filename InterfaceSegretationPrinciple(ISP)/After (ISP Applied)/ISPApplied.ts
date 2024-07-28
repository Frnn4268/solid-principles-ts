/**
 * Interface for user authentication actions.
 */
interface AuthenticationInterface {
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
  }
  
  /**
   * Interface for post management actions.
   */
  interface PostManagementInterface {
    /**
     * Creates a new post.
     */
    createPost(): void;
  
    /**
     * Deletes an existing post.
     */
    deletePost(): void;
  }
  
  /**
   * Class implementing authentication actions.
   */
  class UserAuth implements AuthenticationInterface {
    login(): void {
      console.log("User logged in");
    }
  
    logout(): void {
      console.log("User logged out");
    }
  
    changePassword(): void {
      console.log("Password changed");
    }
  }
  
  /**
   * Class implementing post management actions.
   */
  class UserPost implements PostManagementInterface {
    createPost(): void {
      console.log("Post created");
    }
  
    deletePost(): void {
      console.log("Post deleted");
    }
  }
  
  // Example usage:
  const userAuth = new UserAuth();
  userAuth.login(); // Output: User logged in
  
  const userPost = new UserPost();
  userPost.createPost(); // Output: Post created