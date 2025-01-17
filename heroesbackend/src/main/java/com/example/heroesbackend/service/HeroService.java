package com.example.heroesbackend.service;

import com.example.heroesbackend.entity.HeroEntity;
import com.example.heroesbackend.repository.HeroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

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
}
