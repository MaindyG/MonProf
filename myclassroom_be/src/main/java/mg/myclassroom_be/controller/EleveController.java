package mg.myclassroom_be.controller;

import mg.myclassroom_be.entity.Bulletin;
import mg.myclassroom_be.entity.Eleve;
import mg.myclassroom_be.entity.Prof;
import mg.myclassroom_be.exceptions.EleveNotFoundException;
import mg.myclassroom_be.repository.BulletinRepo;
import mg.myclassroom_be.repository.EleveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EleveController {

    @Autowired
    private EleveRepo eleveRepo;
    private BulletinRepo bulletinRepo;

    //Add
    @PostMapping("/eleve")
    Eleve newEleve(@RequestBody Eleve newEleve) {
        Bulletin bulletin = new Bulletin();
        bulletinRepo.save(bulletin);
        newEleve.setBulletin(bulletin);
        return eleveRepo.save(newEleve);
    }

    //Get All
    @GetMapping("/meseleves")
    List<Eleve> getAllUsers() {
        return eleveRepo.findAll();
    }


    //Modifier
    @PutMapping("/eleve/{student_id}")
    Eleve updateEleve(@RequestBody Eleve newEleve, @PathVariable int student_id){
        return eleveRepo.findById(student_id).map(eleve -> {
            eleve.setGenre(newEleve.getGenre());
            eleve.setNom(newEleve.getNom());
            eleve.setPrenom(newEleve.getPrenom());
            eleve.setNom_figure_parentale((newEleve.getNom_figure_parentale()));
            eleve.setNum_tel_parentale(newEleve.getNum_tel_parentale());
            return eleveRepo.save(eleve); // Save and return the updated Eleve object
        }).orElseThrow(() -> new EleveNotFoundException(student_id));
    }

    //Supprimer
    @DeleteMapping("/eleve/{student_id}")
    String deleteEleve(@PathVariable int student_id){
        if(!eleveRepo.existsById(student_id)){
            throw new EleveNotFoundException(student_id);
        }
        eleveRepo.deleteById(student_id);
        return "Eleve avec id "+student_id +" a été supprimé";
    }


    //Modifier bulletin
    @PutMapping("/eleves/{student_id}/bulletin")
    public Eleve updateBulletinEleve(@PathVariable int student_id, @RequestBody Bulletin newBulletin) {
        Eleve eleve = eleveRepo.findById(student_id)
                .orElseThrow(() -> new EleveNotFoundException(student_id));
        Bulletin bulletin = eleve.getBulletin();
        bulletin.setMoyenneFrancais(newBulletin.getMoyenneFrancais());
        bulletin.setMoyenneMath(newBulletin.getMoyenneMath());
        bulletin.setMoyenneHistoire(newBulletin.getMoyenneHistoire());
        bulletin.setMoyenneEP(newBulletin.getMoyenneEP());
        bulletin.setCommentaire(newBulletin.getCommentaire());
        bulletinRepo.save(bulletin);

        eleve.setBulletin(bulletin);
        return eleveRepo.save(eleve);
    }
}







