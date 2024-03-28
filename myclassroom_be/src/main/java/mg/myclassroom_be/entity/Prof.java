package mg.myclassroom_be.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;



@Entity
@Data
public class Prof {

    @Id
    @GeneratedValue
    private int id;
    private char genre;
    private String nom;
    private String prenom;
    private String email;
    private int classePrimaire;
    private String motDePasse;



}
