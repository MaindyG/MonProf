package mg.myclassroom_be.entity;

import jakarta.persistence.*;
import lombok.Data;


@Entity
@Data
public class Eleve {

    @Id
    @GeneratedValue
    private int student_id;
    private char genre;
    private String nom;
    private String prenom;
    private String nom_figure_parentale;
    private int num_tel_parentale;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "bulletin_id")
    private Bulletin bulletin;

    public Eleve() {
        this.bulletin = new Bulletin();
    }




}
