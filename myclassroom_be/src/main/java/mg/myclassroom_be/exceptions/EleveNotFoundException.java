package mg.myclassroom_be.exceptions;

public class EleveNotFoundException extends RuntimeException {
    public EleveNotFoundException(int student_id) {
        super("L'utilisateur avce l'user suivant n'existe pas: "+student_id);
    }
}
