package mg.myclassroom_be.controller;

import mg.myclassroom_be.entity.Eleve;
import mg.myclassroom_be.exceptions.EleveNotFoundException;
import mg.myclassroom_be.repository.EleveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EleveController {

    @Autowired
    private EleveRepo eleveRepo;

    @PostMapping("/eleve")
    Eleve newEleve(@RequestBody Eleve newEleve) {
        return eleveRepo.save(newEleve);
    }
    @GetMapping("/meseleves")
    List<Eleve> getAllUsers() {
        return eleveRepo.findAll();
    }

    @PutMapping("/eleve/{id}")
    Eleve updateEleve(@RequestBody Eleve newEleve, @PathVariable int id){
        return eleveRepo.findById(id).map(eleve -> {
            eleve.setGenre(newEleve.getGenre());
            eleve.setNom(newEleve.getNom());
            eleve.setPrenom(newEleve.getPrenom());
            eleve.setNom_figure_parentale((newEleve.getNom_figure_parentale()));
            eleve.setNum_tel_parentale(newEleve.getNum_tel_parentale());
            eleve.setProf(newEleve.getProf());
            return eleveRepo.save(eleve); // Save and return the updated Eleve object
        }).orElseThrow(() -> new EleveNotFoundException(id));
    }
    @DeleteMapping("/eleve/{id}")
    String deleteEleve(@PathVariable int id){
        if(!eleveRepo.existsById(id)){
            throw new EleveNotFoundException(id);
        }
        eleveRepo.deleteById(id);
        return "Eleve avec id "+id +" a été supprimé";
    }


}




