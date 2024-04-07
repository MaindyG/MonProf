package mg.myclassroom_be.controller;

import mg.myclassroom_be.entity.Bulletin;
import mg.myclassroom_be.entity.Eleve;
import mg.myclassroom_be.exceptions.EleveNotFoundException;
import mg.myclassroom_be.repository.BulletinRepo;
import mg.myclassroom_be.repository.EleveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
public class EleveController {

    @Autowired
    private EleveRepo eleveRepo;
    @Autowired
    private BulletinRepo bulletinRepo;

    //Add
    @PostMapping("/neweleve")
    Eleve newEleve(@RequestBody Eleve newEleve) {
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
            return eleveRepo.save(eleve);
        }).orElseThrow(() -> new EleveNotFoundException(student_id));
    }

    //Avoir infos eleve
    @GetMapping("/eleve/{student_id}")
    Eleve getEleveById(@PathVariable int student_id) {
        return eleveRepo.findById(student_id)
                .orElseThrow(() -> new EleveNotFoundException(student_id));
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
    @PutMapping("/noteseleve/{student_id}/{bulletin_id}")
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







