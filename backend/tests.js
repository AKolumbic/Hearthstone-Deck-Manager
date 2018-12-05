const chai = require('chai');
const chaiHTTP = require('chai-http');
const assert = require('assert');
const server = require('./server');

// console.log("Chai: ", chai);
// console.log("Chai-HTTP: ",chaiHTTP);
// console.log("Assert: ", assert);

chai.use(chaiHTTP);

describe('API Route Testing: ', () => {

    // server.js route tests:
    it('Makes sure the server is running', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                if (err) console.warn(err);
                else {
                    assert(res.body.content === 'The server is up and running!');
                    done();
                }
            })
    });

    it('BOOM TESTPOINT: ', (done) => {
        chai.request(server)
            .get('/boom/')
            .end((err, res) => {
                if (err) console.warn(err);
                else {
                    assert(res.status === 200);
                    done();
                }
            })
    });

    it('INFO endpoint: ', (done) => {
        chai.request(server)
            .get('/info/')
            .end((err, res) => {
                if (err) console.warn(err);
                else {
                    assert(res.status === 200);
                    done();
                }
            })
    });

    it('CARDBACK endpoint: ', (done) => {
        chai.request(server)
            .get('/cardbacks/')
            .end((err, res) => {
                if (err) console.warn(err);
                else {
                    assert(res.status === 200);
                    done();
                }
            })
    });
    // END of server tests. ###################################################


    // cardRouter.js route tests:
    it('ALL CARDS endpoint: ', (done) => {
        chai.request(server)
            .get('/cards/')
            .end((err, res) => {
                if (err) console.warn(err);
                else {
                    assert(res.status === 200);
                    done();
                }
            })
    });

    it('SEARCH endpoint: ', (done) => {
        chai.request(server)
            .get('/cards/search/Dr.%Boom')
            .end((err, res) => {
                if (err) console.warn(err);
                else {
                    assert(res.status === 200);
                    done();
                }
            })
    });

    it('SET endpoint: ', (done) => {
        chai.request(server)
            .get('/cards/set/Blackrock%Mountain')
            .end((err, res) => {
                if (err) console.warn(err);
                else {
                    assert(res.status === 200);
                    done();
                }
            })
    });

    it('TRIBE endpoint: ', (done) => {
        chai.request(server)
            .get('/cards/tribe/Murloc')
            .end((err, res) => {
                if (err) console.warn(err);
                else {
                    assert(res.status === 200);
                    done();
                }
            })
    });

    it('QUALITY endpoint: ', (done) => {
        chai.request(server)
            .get('/cards/quality/Legendary')
            .end((err, res) => {
                if (err) console.warn(err);
                else {
                    assert(res.status === 200);
                    done();
                }
            })
    });

    // END of cardRouter tests. ###############################################


    // classRouter.js route tests:
    describe('TESTS for Class Routes: ', () => {

        it('DRUID endpoint: ', (done) => {
            chai.request(server)
                .get('/cards/class/druid')
                .end((err, res) => {
                    if (err) console.warn(err);
                    else {
                        assert(res.status === 200);
                        done();
                    }
                })
        });

        it('HUNTER endpoint: ', (done) => {
            chai.request(server)
                .get('/cards/class/hunter')
                .end((err, res) => {
                    if (err) console.warn(err);
                    else {
                        assert(res.status === 200);
                        done();
                    }
                })
        });

        it('MAGE endpoint: ', (done) => {
            chai.request(server)
                .get('/cards/class/mage')
                .end((err, res) => {
                    if (err) console.warn(err);
                    else {
                        assert(res.status === 200);
                        done();
                    }
                })
        });

        it('PALADIN endpoint: ', (done) => {
            chai.request(server)
                .get('/cards/class/paladin')
                .end((err, res) => {
                    if (err) console.warn(err);
                    else {
                        assert(res.status === 200);
                        done();
                    }
                })
        });

        it('PRIEST endpoint: ', (done) => {
            chai.request(server)
                .get('/cards/class/priest')
                .end((err, res) => {
                    if (err) console.warn(err);
                    else {
                        assert(res.status === 200);
                        done();
                    }
                })
        });

        it('ROGUE endpoint: ', (done) => {
            chai.request(server)
                .get('/cards/class/rogue')
                .end((err, res) => {
                    if (err) console.warn(err);
                    else {
                        assert(res.status === 200);
                        done();
                    }
                })
        });

        it('SHAMAN endpoint: ', (done) => {
            chai.request(server)
                .get('/cards/class/shaman')
                .end((err, res) => {
                    if (err) console.warn(err);
                    else {
                        assert(res.status === 200);
                        done();
                    }
                })
        });

        it('WARLOCK endpoint: ', (done) => {
            chai.request(server)
                .get('/cards/class/warlock')
                .end((err, res) => {
                    if (err) console.warn(err);
                    else {
                        assert(res.status === 200);
                        done();
                    }
                })
        });

        it('WARRIOR endpoint: ', (done) => {
            chai.request(server)
                .get('/cards/class/warrior')
                .end((err, res) => {
                    if (err) console.warn(err);
                    else {
                        assert(res.status === 200);
                        done();
                    }
                })
        });
        
    });
    // END of classRouter tests. ##############################################
    
});
