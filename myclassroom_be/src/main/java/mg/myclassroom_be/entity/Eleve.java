package mg.myclassroom_be.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class Eleve {

    @Id
    @GeneratedValue
    private int id;
    private String nom;
    private String prenom;
    private double moyenneFrancais;
    private double moyenneMath;
    private double moyenneHistoire;
    private double moyenneEP;
    private String commentaire;



}
