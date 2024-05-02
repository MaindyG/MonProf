package mg.myclassroom_be.exceptions;

public class ProfNotFoundException extends RuntimeException {
    public ProfNotFoundException(int prof_id) {
        super("Could not find the user with the user id :"+prof_id);
    }

}
