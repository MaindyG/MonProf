package mg.myclassroom_be.controller;

import mg.myclassroom_be.entity.Eleve;
import mg.myclassroom_be.repository.EleveRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EleveController {

    @Autowired
    private EleveRepo eleveRepo;

    @PostMapping("/neweleve")
    Eleve newEleve(@RequestBody Eleve newEleve) {
        return eleveRepo.save(newEleve);
    }
    @GetMapping("/meseleves")
    List<Eleve> getAllUsers() {
        return eleveRepo.findAll();
    }

}
