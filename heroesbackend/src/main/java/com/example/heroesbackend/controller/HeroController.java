package com.example.heroesbackend.controller;

import com.example.heroesbackend.entity.HeroEntity;
import com.example.heroesbackend.service.HeroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/heroes")
public class HeroController {

    @Autowired
    private HeroService heroService;

    @PostMapping
    public ResponseEntity addHero(@RequestBody HeroEntity hero) {
        try {
            return ResponseEntity.ok(this.heroService.addHero(hero));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error in addHero()");
        }
    }

    //@CrossOrigin(origins = "http://localhost:4200")
    @GetMapping
    public ResponseEntity getAllHeroes() {
        try {
            return ResponseEntity.ok(this.heroService.getAllHeroes());
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error in getAllHeroes()");
        }
    }

   // @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("{id}")
    public ResponseEntity getHero(@PathVariable("id") Long id) {
        try {
            return ResponseEntity.ok(this.heroService.getHero(id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error in getHero()");
        }
    }

    @PutMapping("{id}")
    public ResponseEntity updateHero(@PathVariable("id") Long id, @RequestBody HeroEntity hero) {
        try {
            return ResponseEntity.ok(this.heroService.updateHero(hero, id));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error in updateHero()");
        }
    }
}
