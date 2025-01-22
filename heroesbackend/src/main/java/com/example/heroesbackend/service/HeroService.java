package com.example.heroesbackend.service;

import com.example.heroesbackend.entity.HeroEntity;
import com.example.heroesbackend.repository.HeroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class HeroService {
    @Autowired
    private HeroRepository heroRepository;

    public HeroEntity addHero(HeroEntity hero) {
        return this.heroRepository.save(hero);
    }
    public List<HeroEntity> getAllHeroes() {
        return this.heroRepository.findAll();
    }

    public HeroEntity getHero(Long id) {
        return this.heroRepository.findById(id).get();
    }
    public List<HeroEntity> getHero(String name) {
        List<HeroEntity> selectedHeroes = new ArrayList<>();
        List<HeroEntity> heroes = this.heroRepository.findAll();
        name = name.toLowerCase();
        for (HeroEntity hero : heroes) {
            if(hero.getName().toLowerCase().contains(name)) {
                selectedHeroes.add(hero);
            }
        }
        return selectedHeroes;
    }
    public HeroEntity updateHero(HeroEntity hero, Long id) {
        HeroEntity oldHero = this.heroRepository.findById(id).get();
        oldHero.setName(hero.getName());
        return this.heroRepository.save(oldHero);
    }
    public HeroEntity updateHeroTest(HeroEntity hero) {
        HeroEntity oldHero = this.heroRepository.findById(hero.getId()).get();
        oldHero.setName(hero.getName());
        return this.heroRepository.save(oldHero);
    }

    public Long deleteHero(Long id) {
        this.heroRepository.deleteById(id);
        return id;
    }
}
