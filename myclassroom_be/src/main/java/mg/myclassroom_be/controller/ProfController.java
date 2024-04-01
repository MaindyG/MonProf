package mg.myclassroom_be.controller;

import mg.myclassroom_be.entity.Prof;
import mg.myclassroom_be.exceptions.ProfNotFoundException;
import mg.myclassroom_be.repository.ProfRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ProfController {

    @Autowired
    private ProfRepo profRepo;


    //Add
    @PostMapping("/newprof")
    Prof newProf(@RequestBody Prof newProf) {
        return profRepo.save(newProf);
    }

    //Get All
    @GetMapping("/lesprofs")
    List<Prof> getAllUsers() {
        return profRepo.findAll();
    }

    //Modifier
    @PutMapping("/prof/{prof_id}")
    Prof updateProf(@RequestBody Prof newProf, @PathVariable int prof_id){
        return profRepo.findById(prof_id).map(prof -> {
            prof.setGenre(newProf.getGenre());
            prof.setNom(newProf.getNom());
            prof.setPrenom(newProf.getPrenom());
            prof.setEmail((newProf.getEmail()));
            prof.setClassePrimaire(newProf.getClassePrimaire());
            //modifier mot de passe sera quelque part d'autre
            return profRepo.save(prof); // Save and return the updated Eleve object
        }).orElseThrow(() -> new ProfNotFoundException(prof_id));
    }

    @PutMapping("/prof/{prof_id}/updatePwd")
    Prof updatePwd(@RequestBody Prof newProf, @PathVariable int prof_id){
        return profRepo.findById(prof_id).map(prof -> {
            prof.setMotDePasse(newProf.getMotDePasse());
            return profRepo.save(prof); // Save and return the updated Eleve object
        }).orElseThrow(() -> new ProfNotFoundException(prof_id));
    }


}
