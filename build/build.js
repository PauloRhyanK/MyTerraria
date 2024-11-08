class Build {
    #armor;
    #weapon;
    #acessories;

    constructor() {
        this.#armor = null;
        this.#weapon = null;
        this.#acessories = [];
    }

    setArmor(armor){
        this.#armor = armor;
    }

    getArmor(this){
        return this.#armor
    }

    setWeapon(Weapon){
        this.#weapon = Weapon;
    }

    getWeapon(this){
        return this.Weapon;
    }

    setAcessories(acessories){
        this.#acessories = acessories
    }   
    
    getAcessories(){
        return this.#acessories
    }
}
